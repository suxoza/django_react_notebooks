from django.urls import path
from .views import NotesList, NoteDetails

urlpatterns = [
    path("<int:pk>", NoteDetails.as_view(), name="details"),
    path("", NotesList.as_view(), name="list"),
]
