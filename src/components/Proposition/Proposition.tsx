import ButtonLink from "../../ui/ButtonLink/ButtonLink";

const Proposition:React.FC = () => {
    return (
      <ul>
        <li>
          <h3>Basic</h3>
          <h2>Free</h2>
          <p>Up to 5 users for free</p>
          <ul>
            <li>
              <p>Basic document collaboration</p>
            </li>
            <li>
              <p>2 GB storage</p>
            </li>
            <li>
              <p>Great security and support</p>
            </li>
          </ul>
          <ButtonLink />
        </li>
        <li>
          <h3>Pro</h3>
          <h2>$9.99</h2>
          <p>All essential integrations</p>
          <ul>
            <li>
              <p>50 GB storage</p>
            </li>
            <li>
              <p>More control and insights</p>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
          <ButtonLink />
        </li>
        <li>
          <h3>Ultimate</h3>
          <h2>$19.99</h2>
          <p>Per user, billed monthly</p>
          <ul>
            <li>
              <p>Robust work management</p>
            </li>
            <li>
              <p>100 GB storage</p>
            </li>
            <li>
              <p>VIP support</p>
            </li>
          </ul>
          <ButtonLink />
        </li>
      </ul>
    );
}
 
export default Proposition;