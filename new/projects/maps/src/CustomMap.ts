// Instructions to every other class
// on how they can be an argument to addmarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId) as HTMLElement;

    this.googleMap = new google.maps.Map(mapElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  // ...
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
      map: this.googleMap,
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  //   addCompanyMarker(company: Company) {
  //     new google.maps.Marker({
  //       position: { lat: company.location.lat, lng: company.location.lng },
  //       map: this.googleMap,
  //     });
  //   }
}
