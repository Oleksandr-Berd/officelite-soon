
import * as SC from "./PropoSitionStyled"

import ButtonLink from "../../ui/ButtonLink/ButtonLink";

import bg from "../../assets/images/item_bg_mob.svg"
import bgTab from "../../assets/images/item_bg_tab.svg"
import { useMediaQuery } from "usehooks-ts";

const Proposition:React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")

const isDesktop = useMediaQuery("(min-width:1440px)")

    return (
      <>
        {isTablet ? (
          <SC.List>
            <SC.Item color="white">
              <SC.ContentWrapper>
                <SC.Package>Basic</SC.Package>
                <SC.Price>Free</SC.Price>
                <SC.UserProposal>Up to 5 users for free</SC.UserProposal>
                {!isDesktop ? (
                  <ButtonLink location="proposal" color="grey" />
                ) : null}
              </SC.ContentWrapper>
              <SC.SubList color="white">
                <SC.SubItem>
                  <p>Basic document collaboration</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>2 GB storage</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>Great security and support</p>
                </SC.SubItem>
              </SC.SubList>
              {isDesktop ? (
                <ButtonLink location="proposal" color="grey" />
              ) : null}
            </SC.Item>
            <SC.Item color="blue" bg={bgTab}>
              <SC.ContentWrapper>
                <SC.Package>Pro</SC.Package>
                <SC.Price>$9.99</SC.Price>
                <SC.UserProposal>All essential integrations</SC.UserProposal>
                {!isDesktop ? (
                  <ButtonLink location="proposal" color="grey" />
                ) : null}
              </SC.ContentWrapper>
              <SC.SubList color="blue">
                <SC.SubItem>
                  <p>All essential integrations</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>50 GB storage</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>More control and insights</p>
                </SC.SubItem>
              </SC.SubList>
              {isDesktop ? (
                <ButtonLink location="proposal" color="grey" />
              ) : null}
            </SC.Item>
            <SC.Item color="white">
              <SC.ContentWrapper>
                <SC.Package>Ultimate</SC.Package>
                <SC.Price>$19.99</SC.Price>
                <SC.UserProposal>Per user, billed monthly</SC.UserProposal>
                {!isDesktop ? (
                  <ButtonLink location="proposal" color="grey" />
                ) : null}
              </SC.ContentWrapper>
              <SC.SubList color="white">
                <SC.SubItem>
                  <p>Robust work management</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>100 GB storage</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>VIP support</p>
                </SC.SubItem>
              </SC.SubList>
              {isDesktop ? (
                <ButtonLink location="proposal" color="grey" />
              ) : null}
            </SC.Item>
          </SC.List>
        ) : (
          <SC.List>
            <SC.Item color="white">
              <SC.Package>Basic</SC.Package>
              <SC.Price>Free</SC.Price>
              <SC.UserProposal>Up to 5 users for free</SC.UserProposal>
              <SC.SubList color="white">
                <SC.SubItem>
                  <p>Basic document collaboration</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>2 GB storage</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>Great security and support</p>
                </SC.SubItem>
              </SC.SubList>
              <ButtonLink location="proposal" color="grey" />
            </SC.Item>
            <SC.Item color="blue" bg={bg}>
              <SC.Package>Pro</SC.Package>
              <SC.Price>$9.99</SC.Price>
              <SC.UserProposal>All essential integrations</SC.UserProposal>
              <SC.SubList color="blue">
                <SC.SubItem>
                  <p>All essential integrations</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>50 GB storage</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>More control and insights</p>
                </SC.SubItem>
              </SC.SubList>
              <ButtonLink location="proposal" color="white" />
            </SC.Item>
            <SC.Item color="white">
              <SC.Package>Ultimate</SC.Package>
              <SC.Price>$19.99</SC.Price>
              <SC.UserProposal>Per user, billed monthly</SC.UserProposal>
              <SC.SubList color="white">
                <SC.SubItem>
                  <p>Robust work management</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>100 GB storage</p>
                </SC.SubItem>
                <SC.SubItem>
                  <p>VIP support</p>
                </SC.SubItem>
              </SC.SubList>
              <ButtonLink location="proposal" color="grey" />
            </SC.Item>
          </SC.List>
        )}
      </>
    );
}
 
export default Proposition;