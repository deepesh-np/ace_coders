from rest_framework import viewsets
from .models import MentorshipRequest
from .serializers import MentorshipRequestSerializer

class MentorshipRequestViewSet(viewsets.ModelViewSet):
    queryset = MentorshipRequest.objects.all()
    serializer_class = MentorshipRequestSerializer
