import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="text"],
          input[type="email"],
          textarea {
            text-transform: lowercase;
          }

          input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.53403071075394!2d70.78237896016034!3d22.267674789445124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb6441de8367%3A0x8adbebff964f0a06!2sOm%20Nagar%20Chowk!5e0!3m2!1sen!2sin!4v1705554713398!5m2!1sen!2sin"
       width="100%" 
       height="400" 
       style= {{border: "0"}}
       allowFullScreen=""
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade" />


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mayrnkqz"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;