#!/usr/bin/env python3
import requests
import xmltodict

#identifier = input("Identifier:")
identifier = "100625762"
coordinates = []
title = None
rightsowner = None
accessrights = None

url = "http://digitale-sammlungen.gwlb.de/oai2/?verb=GetRecord&metadataPrefix=mets&identifier=" + identifier
response = requests.get(url)
data = xmltodict.parse(response.content)
metadata = data['OAI-PMH']['GetRecord']['record']['metadata']['mets:mets']['mets:dmdSec']['mets:mdWrap']['mets:xmlData']['mods:mods']
file = data['OAI-PMH']['GetRecord']['record']['metadata']['mets:mets']['mets:structMap']['mets:div']['mets:div']

print("Datensatz mit dem Identifier: " + identifier)
print("Titel: " + metadata['mods:titleInfo']['mods:title'])
title = metadata['mods:titleInfo']['mods:title']
if 'mods:coordinates' in metadata['mods:subject']['mods:cartographics'].keys():
    for coordinate in metadata['mods:subject']['mods:cartographics']['mods:coordinates']:
        print("Koordinaten: " + coordinate)
        coordinates.append(coordinate)
else:
        print("keine Koordinaten angegeben")

if 'mets:mptr' in file.keys():
    urlToFile = file['mets:mptr']['@xlink:href']
    response = requests.get(urlToFile)
    data = xmltodict.parse(response.content)
    rightsowner = data['mets:mets']['mets:amdSec']['mets:rightsMD']['mets:mdWrap']['mets:xmlData']['dv:rights']['dv:owner']
    accessrights = data['mets:mets']['mets:amdSec']['mets:digiprovMD']['mets:mdWrap']['mets:xmlData']['dv:links']['dv:license']
    print(rightsowner + " : " + accessrights)
    files = data['mets:mets']['mets:fileSec']['mets:fileGrp']
    for key in files:
        if key['@USE'] == "DEFAULT":
            urlFile = key['mets:file']['mets:FLocat']['@xlink:href']
            r = requests.get(urlFile)
            filepath = "docs/" + identifier + ".jpg"
            open(filepath, 'wb').write(r.content)
            print("Bild heruntergeladen")
else:
    print("kein Bild vorhanden")
