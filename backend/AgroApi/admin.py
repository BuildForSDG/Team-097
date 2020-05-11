from django.contrib import admin
from .models import UserProfile, UserInterest, UserEducation, UserLocation, PostComment, PostLike, Post, GroupMember, Group, Message, MetaTags

all_models = [UserLocation, UserEducation, UserInterest, UserProfile, PostComment, PostLike, Post, GroupMember, Group, Message, MetaTags]
for model in all_models:
    admin.site.register(model)


# Register your models here.

