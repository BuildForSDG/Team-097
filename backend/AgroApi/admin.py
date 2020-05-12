from django.contrib import admin
from .models import UserProfile, UserInterest, UserEducation, PostComment, PostLike, Post, GroupMember, Group, MetaTag

all_models = [UserEducation, UserInterest, UserProfile, PostComment, PostLike, Post, GroupMember, Group, MetaTag]
for model in all_models:
    admin.site.register(model)


# Register your models here.

