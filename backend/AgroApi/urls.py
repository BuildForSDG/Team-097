from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'People', views.People, basename='people')
router.register(r'Follow_People', views.FollowPeople, basename='follow-people')
router.register(r'User_Followers', views.UserFollowers, basename='user-followers')
router.register(r'User_Profile', views.UserProfileView, basename='profile')
router.register(r'Posts', views.Post, basename='posts')
router.register(r'Comments', views.PostComment, basename='comments')
router.register(r'Replies', views.PostComment, basename='replies')
router.register(r'Like', views.Like, basename='Like')
router.register(r'Groups', views.Groups, basename='group')
router.register(r'Group_Posts', views.GroupPost, basename='group-post')


urlpatterns = [

    path('', include(router.urls)),
    
]

# urlpatterns = [
#     path('signup/', views.SignUp.as_view(), name="signup"),
#     path('login/', views.Login.as_view(), name='login'),
#     path('userprofile/', views.UserProfileView.as_view(), name="user_profile"),
#     path('post', views.Post.as_view(), name="posts"),
#     path('post/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
#     path('postcomment', views.PostComment.as_view(), name="post_comment"),
#     path('contacts/', views.Contacts.as_view(), name="user_contacts"),
#     path('groups/', views.Groups.as_view(), name="groups"),
#     # path('group_post/<int:pk>', views.GroupPost.as_view(), name="group_post"),
# ]


