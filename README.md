# wirvsvirus-ionic

## Endpunkte


## Search
```
Request:
{
  search: {
    "plz": "12345"
    "type_of_market": "grocery"
  }
}

Response:
{
  markets: [
   {"id": "1", "name": "testname", "adress": "Musterweg 1 Berlin"},
   {"id": "2", "name": "testname2", "adress": "Musterweg 2 Berlin"}
  ]
}
```

## freeSlots
```
Request: 
{
 id: 1,
 date: "datestring" // sag ich noch welches format wir am einfachsten schicken
}

Response:
{
  slots: [
    { "id": 1, start_time: "datestring", end_time: "datestring", number_of_free_slots: 2, max_slots: 10 },
    { "id": 2, start_time: "datestring", end_time: "datestring", number_of_free_slots: 2, max_slots: 10 }
  ]
}
```
