import { useState } from 'react';

function MailchimpSignupForm() {
  const [email, setEmail] = useState('');

  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const url =
      'https://showwcase.us10.list-manage.com/subscribe/post?u=66ada846d48f3a0ad2988ef35&id=d4d93b24de';
    const data = {
      EMAIL: email,
      b_66ada846d48f3a0ad2988ef35_d4d93b24de: '',
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          // Success message
          console.log('Subscription successful!');
        } else {
          // Error message
          console.log('Subscription failed.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div id="mc_embed_signup">
      <form
        onSubmit={handleSubmit}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            ></div>
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
              <p className="brandingLogo">
                <a
                  href="http://eepurl.com/io-tFg"
                  title="Mailchimp - email marketing made easy and fun"
                >
                  <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MailchimpSignupForm;
