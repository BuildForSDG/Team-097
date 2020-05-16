from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.SignUp.as_view(), name="signup"),
    path('login/', views.Login.as_view(), name='login'),
    path('userprofile/', views.UserProfileView.as_view(), name="user_profile"),
    path('post', views.Post.as_view(), name="post-list"),
    path('post/<int:pk>/', views.UserProfileView.as_view(), name="post-detail"),
    path('postcomment', views.UserProfileView.as_view(), name="post-comment"),
    path('contacts/', views.UserProfileView.as_view(), name="user-contacts"),
]


