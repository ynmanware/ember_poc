export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

this.passthrough('http://www.ember-cli-mirage.com/**');

this.del('/employees/:id', function(){ return {};}); 
this.get('/employees/:id', function(){return {};}); 
this.get('/employees', function() {
    return {
      data: [{
        type: 'employees',
        id: 1,
        attributes: {
          name: 'Yogesh Manware',
          location: 'Pune, India',
          contact: '91 9730621038',
          image: 'https://www.eclipse.org/stardust/community-work/images/yogesh-manware.png'
        }
      }, {
        type: 'employees',
        id: 2,
        attributes: {
          name: 'Subodh Godbole',
          location: 'Pune, India',
          contact: '91 9847455367',
          image: 'https://www.eclipse.org/stardust/community-work/images/subodh-godbole.png'
        }
      }, {
        type: 'employees',
        id: 3,
        attributes: {
          name: 'Shrikant Gangal',  
          location: 'Pune, India',
          contact: '91 9847455457',
          image: 'https://www.eclipse.org/stardust/community-work/images/shrikant-gangal.png'
        }
      },
      {
        type: 'employees',
        id: 4,
        attributes: {
          name: 'Anoop Nair',
          location: 'USA',
          contact: '+1 2054820430',
          image: 'https://www.eclipse.org/stardust/community-work/images/anoop-nair.gif'
        }
      }
      ]
    };
  });

}
