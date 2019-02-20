const chai = require("chai");

const mongoose = require("mongoose");
const User = require("../models/User");

//require dev Dependencies

const chaiHttp = require("chai-http");
const server = require("../server");
const user = require("../routes/api/users");

const assert = chai.assert;
var expect = chai.expect;
chai.use(chaiHttp);

// Parent Testing Block
describe("User", () => {
  beforeEach(done => {
    // Before each tests clear the Database
    User.remove({}, err => {
      done();
    });
  });

  /**
   * @test
   * /POST api/users/register
   */
  describe("POST /api/users/register", done => {
    it("a_user_with_valid_form_data_can_register", () => {
      const user = {
        name: "johnDoe",
        email: "johnDoe@test.com",
        password: "secret",
        password2: "secret"
      };

      chai
        .request(server)
        .post("/api/users/register")
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });

  /**
   * @test
   * /POST api/users/login
   */
  describe("POST /api/users/login", done => {
    it("a_user_with_valid_form_data_can_login", () => {
      const user = {
        email: "johnDoe@test.com",
        password: "secret"
      };

      chai
        .request(server)
        .post("/api/users/login")
        .send(user)
        .end((err, res) => {
          expect(res.body).to.have.property("success");
          expect(res.body.success).to.eql(true);
          expect(res).to.have.status(200);
        });
    });
  });
});

/* 
Tests to write  :
  a_user_with_valid_form_data_can_register() ==> status 200 #DONE
  an_existing_user_can_login() ==> assert sucess trur  + status 200 #DONE
  all_users_can_post_to_basic_form() ==> status 200
  a_regular_user_cannot_post_to_superuser_dashboard() ==> status 401
  a_regular_user_cannot_post_to_admin_dashboard() ==> status 401
  a_super_user_can_post_to_superuser_dashboard() ==> status 200
  a_super_user_cannot_post_to_admin_dashboard() ==> status 401
*/
