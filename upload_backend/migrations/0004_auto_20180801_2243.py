# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-08-01 22:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('upload_backend', '0003_auto_20180801_2238'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileupload',
            name='name',
            field=models.CharField(blank=True, max_length=250),
        ),
    ]