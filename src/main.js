import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Hi, I'm Taewapon"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h1"
      content="A Developer."
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
      }}
    />
    <Header
      as="h1"
      content="Based in Thailand"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
      }}
    />
    <Header
      as="h2"
      // content='"Mistakes are the portals of discovery."'
      content='This website is still in a development 🚧'
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 950, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Work
                </Menu.Item>
                <Menu.Item as="a">About</Menu.Item>
                <Menu.Item position="right">
                  <a
                    href="https://facebook.com/mayazen555"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="facebook f" />
                  </a>
                  <a
                    href="https://linkedin.com/in/taewaponb/"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="linkedin" />
                  </a>
                  <a
                    href="https://instagram.com/petchz.jpg/"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="instagram" />
                  </a>
                  <a
                    href="https://github.com/petchz"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="github" />
                  </a>

                  {/* <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Contact
                  </Button> */}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Work
          </Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            className=""
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <a
                    href="https://facebook.com/mayazen555"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="facebook f" />
                  </a>
                  <a
                    href="https://linkedin.com/in/taewaponb/"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="linkedin" />
                  </a>
                  <a
                    href="https://instagram.com/petchz.jpg/"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="instagram" />
                  </a>
                  <a
                    href="https://github.com/petchz"
                    style={{ marginRight: "1em" }}
                  >
                    <Icon name="github" />
                  </a>

                  {/* <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Contact
                  </Button> */}
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              About Me
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I'm a computer engineering student from Khon Kaen University
              seeking to find a new opportunity where I can apply my knowledge
              and skills for continuous improvement.
            </p>
            <p>
              (I'm a quick learner and also good at self learning, I'm always
              look at positive side of things but that's doesn't mean I will
              overlook my problems.)
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/67822580_1624935227641502_4033371704267898880_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeH8vcx4Q7D9HGqUAuGGxi8tkWzNHZofSveRbM0dmh9K96tO1TelMPEiS7TZUAnNR6jffldm5FcBUHJ0UirNjUZn&_nc_ohc=hh3q7XVAHskAX_nOl9v&_nc_ht=scontent.fbkk5-7.fna&oh=b70ca5e6eed26e1b98efd016da458615&oe=5F0E6C52"
            />
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical hidden>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical hidden>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="/">SOME OF MY PAST WORK</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          SOON
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                <List.Item as="a">Email: Taewapon.b@kkumail.com</List.Item>
                <List.Item as="a">Tel: (+66)87-4560859</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Social
              </Header>
              <div>
                <Button
                  circular
                  color="facebook"
                  icon="facebook"
                  style={{ marginRight: "1em" }}
                />
                <Button
                  circular
                  color="linkedin"
                  icon="linkedin"
                  style={{ marginRight: "1em" }}
                />
                <Button
                  circular
                  color="red"
                  icon="instagram"
                  style={{ marginRight: "1em" }}
                />
                <Button
                  circular
                  color="github"
                  icon="github"
                  style={{ marginRight: "1em" }}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
