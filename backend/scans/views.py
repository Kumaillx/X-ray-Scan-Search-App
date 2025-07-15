from rest_framework import viewsets, filters
from .models import Scan
from .serializers import ScanSerializer

class ScanViewSet(viewsets.ModelViewSet):
    queryset = Scan.objects.all()
    serializer_class = ScanSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['body_part', 'diagnosis', 'institution', 'tags']
