from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('date_joined', 'last_login', 'code')


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'date_joined', 'last_login', 'first_name', 'last_name', 'about_me',
                  'location', 'profile_picture']


class UserRegistrationSerializer(serializers.ModelSerializer):
    password_repeat = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'password_repeat', 'first_name', 'last_name', 'code', 'location']

    def validate(self, attrs):
        password = attrs.get('password')
        password_repeat = attrs.get('password_repeat')

        if password != password_repeat:
            raise serializers.ValidationError({'repeat_password': 'Passwords must match.'})

        return attrs

    def update(self, instance, validated_data):
        validated_data.pop('password_repeat')  # Remove password-repeat since it's not needed for user update
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
            instance.save()
            return instance


class FirstUserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email']

    def create(self, validated_data):
        email = validated_data.get('email')
        new_user = User(
            email=email,
            is_active=False,
        )
        new_user.save()

        send_mail(
            'Thank you for registering!',
            f'Your validation code is {new_user.code}',
            'Luna2backend1@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )
        return new_user
