from movies.models import Movie
from rest_framework import viewsets
from movies.serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):

    queryset = Movie.objects.all().order_by('id')
    serializer_class = MovieSerializer

    def get_details(self, request):
        pass
