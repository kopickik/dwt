describe('my first unit test', function (t) {
    t.ok(Bookmarks.view.main.Main, 'Found Main view.');
    t.ok(Bookmarks.store.Personnel, 'Found Personnel.');

    var store;

    t.beforeEach(function(t) {
        store = new Bookmarks.store.Personnel({
            data: { items: [
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
                { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
                { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
                { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
            ]}
        });
    });
    t.it('Should support getting a user by phone number lookup', function(t) {
        t.expect(store.getUserByPhoneNumber('555-111-1111').get('name').toBe('Jean Luc'));
        t.expect(store.getUserByPhoneNumber('foo')).toBe(null);
    });
});
