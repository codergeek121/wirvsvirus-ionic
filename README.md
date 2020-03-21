# wirvsvirus-ionic

## Endpunkte


## Search
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

## freeSlots
```json
Request: 
{
 "id": 1,
 "date": "datestring" // sag ich noch welches format wir am einfachsten schicken
}

Response:
{
  "slots": [
    { "id": 1, start_time: "datestring", end_time: "datestring", free_slots: 2, max_slots: 10 },
    { "id": 2, start_time: "datestring", end_time: "datestring", free_slots: 2, max_slots: 10 }
  ]
}
```

## bookSlot

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

