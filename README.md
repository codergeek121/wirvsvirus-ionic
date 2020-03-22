# wirvsvirus-ionic

## Endpunkte

### Search
```json
Request:
{
  "search": {
    "plz": "12345",
    "type_of_market": "grocery"
  }
}

Response:
{
  "markets": [
   {"id": "1", "name": "testname", "adress": "Musterweg 1 Berlin"},
   {"id": "2", "name": "testname2", "adress": "Musterweg 2 Berlin"}
  ]
}
```

### freeSlots

datestring format einigen wir uns noch
```json
Request:
{
 "id": 1,
 "date": "datestring"
}

Response:
{
  "slots": [
    { "id": 1, "start_time": "datestring", "end_time": "datestring", "free_slots": 2, "max_slots": 10 },
    { "id": 2, "start_time": "datestring", "end_time": "datestring", "free_slots": 2, "max_slots": 10 }
  ]
}
```

### bookSlot

```json
Request:
{ "slot_id": 1 }

Reponse:
{ "booking_code": "ax4s39" }
```

## Validate Booking Code

```json
Request:
{ "booking_code": "ax4s39", "market_id": 1 }

Reponse:
{ "details": {
 ...
} }
```








## Im Backend Implementiert


### Display Store Types
```json
Request:
GET: /storetypes/

Response:
[
    {
        "id": 1,
        "name": "Supermarkt"
    },
    {
        "id": 2,
        "name": "Apotheke"
    }
]
```

### Display Stores by Type

```json
Request:
GET /stores/?typeid=1

Response:
[
    {
        "id": 1,
        "name": "Rewe",
        "type": {
            "id": 1,
            "name": "Supermarkt"
        },
        "description": "Eschersheimer Landstraße 223, 60320 Frankfurt, Germany",
        "address": {
            "id": 2,
            "street": "Eschersheimer Landstraße",
            "housenumber": "223",
            "zip_code": "60320",
            "city": "Frankfurt",
            "country": {
                "id": 1,
                "name": "Germany"
            }
        },
        "lat": "50.133809",
        "long": "8.671110"
    },
    {...},
]
```

### Display Store Capacity (possible slots) for a Store

```json
Request:
GET /storecapacities/?storeid=1

Reponse:
[
    {
        "id": 1,
        "store": "Rewe 60320",
        "start": "2020-03-22T10:00:00Z",
        "end": "2020-03-22T10:30:00Z",
        "total_capacity": 15,
        "reserved_capacity": 4,
        "available_capacity": 7
    },
]
```

### Request Reservation

```json
Request:
POST /placebooking/<storecapacityid>/

Reponse:
{
  "id": 6,
  "identifier": "749478",
  "store_capacity": {
    "id": 1,
    "start": "2020-03-21T10:00:00Z",
    "end": "2020-03-21T11:00:00Z",
    "total_capacity": 9,
    "reserved_capacity": 3,
    "available_capacity": 0,
    "store": {
      "id": 1,
      "name": "Rewe",
      "type": null,
      "description": "",
      "address": {
        "id": 1,
        "street": "Eschersheimer Landstra\\u00dfe",
        "housenumber": "2345",
        "zip_code": "60320",
        "city": "Frankfurt",
        "country": {
          "id": 1,
          "name": "Germany"
        }
      },
      "lat": null,
      "long": null
    }
  }
}
or
{"Success": "False", "Error": "Storecapacity is not sufficient."}
```


### Check Reservation
```json
Request:
POST validatebooking/<identifier>/

Reponse:
{"valid": "True", "start": "2020-03-21T10:00:00Z", "end": "2020-03-21T11:00:00Z"}
or
{"valid": "False"}
```
