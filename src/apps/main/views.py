from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponse
from django.shortcuts import render


def test(request: WSGIRequest) -> HttpResponse:
    return render(request, 'main/list.html')
