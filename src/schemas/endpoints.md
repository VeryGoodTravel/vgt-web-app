# Endpoints

*All requests and responses should be wrapped inside Envelope.schema.json*

| Method | Name  | Request Schema | Response Schema |
|:------:|:-----:|:--------------:|:---------------:|
| **GET** | GetFilters | *none* | `TravelFilters.schema.json` |
| **GET** | GetOfferPage | `TravelGetOfferPage.schema.json` | `TravelOfferPage.schema.json` |
| **GET** | GetOfferDetails | `TravelGetOfferDetails.schema.json` | `TravelOfferDetails.schema.json` |
| **POST** | PurchaseOffer | `TravelPurchaseOffer.schema.json` | `TravelPurchaseOfferStatus.schema.json` |
| **POST** | Login | `LoginRequest.schema.json` | `LoginResponse.schema.json` |
