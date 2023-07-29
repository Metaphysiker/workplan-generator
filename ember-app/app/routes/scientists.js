import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model() {
        let scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
        let swissPeople = ["Ueli", "Ferdinand"];

      return {
        scientists: scientists,
        swissPeople: swissPeople
      };
    }
  }
