from rest_framework import serializers
from .models import UserProfile, UserInterest, UserEducation, UserSkill, Post, Group, GroupMember, MetaTag, PostComment,Connection,ConnectionStatus
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        profile = UserProfile(user=user)
        profile.save()
        Token.objects.create(user=user)
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserInterestSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = UserInterest
        fields = '__all__'

class UserSkillSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = UserSkill
        fields = '__all__'

class UserEducationSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = UserEducation
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    group = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    metatags = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    likes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Post
        fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Group
        fields = '__all__'

class GroupMemberSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    group = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = GroupMember
        fields = '__all__'

class MetaTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetaTag
        fields = '__all__'

class PostCommentSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = PostComment
        fields = ['comment', 'user']


class ConnectionSerializer(serializers.ModelSerializer):
    user_1 = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    user_2 = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    action_user = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    status = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Connection
        fields = '__all__'

class ConnectionStatusSerializer(serializers.ModelSerializer):
    status = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = ConnectionStatus
        fields = '__all__'
