from .serializers import NoteSerializer
from rest_framework import generics
from .serializers import Note, NoteSerializer

from .services import Services


class NotesList(generics.ListCreateAPIView):
    queryset = Note.objects.all()

    def get_queryset(self):
        return Note.objects.order_by("-id").all()

    serializer_class = NoteSerializer

    def post(self, request, *args, **kwargs):
        request.data["created_by"] = f"{Services().uniq_user_identifier(request.META)}"
        return super().post(request, *args, **kwargs)


class NoteDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def put(self, request, *args, **kwargs):
        request.data["created_by"] = f"{Services().uniq_user_identifier(request.META)}"
        return super().put(request, *args, **kwargs)
