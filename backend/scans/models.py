from django.db import models

class Scan(models.Model):
    image = models.ImageField(upload_to='scans/')
    body_part = models.CharField(max_length=100)
    diagnosis = models.CharField(max_length=100)
    scan_date = models.DateField()
    institution = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    tags = models.JSONField(default=list)  # Store tags as a list

    def __str__(self):
        return f"{self.body_part} - {self.diagnosis}"
