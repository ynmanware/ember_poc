import Ember from 'ember';

let solutions = [{
  id: 1,
  title: 'BANKING',
  description: 'Take advantage of core banking, lending, wealth management, analytics, treasury and capital markets solutions that help you become more agile and better able to exceed customer expectations.',
  image: 'http://www.fisglobal.com/-/media/FISGlobal/Images/Home/FIS-Media-Room.jpg'
}, {
  id: 2,
  title: 'DIGITAL / CHANNEL',
  description: 'Mobile, digital, branch, contact center, ATM, phone banking and retailer solutions that help you consistently meet customers when and where they need you using any channel or device.',
  image: 'http://www.fisglobal.com/-/media/FISGlobal/Images/Home/Solutions/Digital/FIS-Digital-Solutions-Banner.jpg'
}, {
  id: 3,
  title: 'PAYMENTS',
  description:'Comprehensive card solutions, merchant services, retail and enterprise payments, imaging services, treasury and testing that enable your customers to move money using the device of their choice.',
  image: 'http://www.fisglobal.com/-/media/FISGlobal/Images/Home/Solutions/Payments/FIS-Payments-Solutions-Thumbnail.jpg'
}];


export default Ember.Route.extend({
	model() {
    	return solutions;
  	}
});
