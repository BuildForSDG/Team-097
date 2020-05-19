from django.contrib import admin
from .models import UserProfile, UserInterest, UserEducation, PostComment, Post, GroupMember, Group, MetaTag,ConnectionStatus

#ModelAdmins
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone')

class UserInterestAdmin(admin.ModelAdmin):
    list_display = ('user','interest_type')

class UserEducationAdmin(admin.ModelAdmin):
    list_filter = ('user', 'education_type', 'institution_name', 'discipline')

class UserSkillAdmin(admin.ModelAdmin):
    list_filter = ('user', 'skill_type')

class GroupAdmin(admin.ModelAdmin):
    list_filter = ('group_name', 'date_created')

class PostAdmin(admin.ModelAdmin):
    list_filter = ('user', 'post_text', 'group', 'metatags', 'date_created', 'likes')

class PostCommentAdmin(admin.ModelAdmin):
    list_filter = ('post', 'comment', 'user')



# Register your models here.
all_models = [UserEducation, UserInterest, UserProfile, PostComment, Post, Group]
all_model_admins = [UserEducationAdmin, UserInterestAdmin, UserProfileAdmin, PostCommentAdmin, PostAdmin, GroupAdmin]
admin.site.register(GroupMember)
admin.site.register(MetaTag)
admin.site.register(ConnectionStatus)
i=0
while i<len(all_models):
    admin.site.register(all_models[i], all_model_admins[i])
    i+=1




