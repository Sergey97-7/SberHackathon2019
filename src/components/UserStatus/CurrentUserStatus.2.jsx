import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container,
  Input,
  Icon,
  Label,
  Menu,
  Table,
  List,
  Select
} from "semantic-ui-react";
import NetWorkCard from "./NetworkCard";
import moment from "moment";
import { userStatusDateInputChange } from "../../actions/statusAction";
import { getUnixDate } from "../../utils/tools";
import ScrollButton from "../ScrollButton";
import StatusList from "./StatusList";
class CurrentUserStatus extends Component {
  getDateSelectOptions = () => {
    const { user } = this.props.status;
    return user.map((req, i) => {
      return {
        key: i,
        value: getUnixDate(req.measurementTime),
        text: moment(getUnixDate(req.measurementTime)).format(
          "DD-MM-YYYY, HH:mm:ss"
        )
      };
    });
  };

  render() {
    const { error, isLoading, user, dateInput } = this.props.status;
    let currentUser;
    if (!error.hasErrored && !isLoading && user !== null) {
      currentUser = user.find(
        user => dateInput === getUnixDate(user.measurementTime)
      );
    }

    console.log("SSS", document.documentElement.scrollTop);
    // console.log("error", moment(user[0].timestamp).format("DD-MM-YYYY, HH:MM:SS"));
    // {error.hasErrored ? (<div>Ошибка: {error.msg}</div>) : isLoading ? (<div>Загрузка...</div>) :
    return (
      <>
        {error.hasErrored ? (
          <div>Ошибка: {error.msg.toString()}</div>
        ) : isLoading || user === null ? (
          <div>Загрузка...</div>
        ) : (
          <div className="current-user-status">
            {/* {currentUser = user.find(user => dateInput === user.timestamp)} */}
            <ScrollButton />
            {/* <Segment className="tts"> */}
            <Header block={true} as="h4">
              История запросов пользователя: {currentUser.account.email}
            </Header>
            <Grid columns={2} stackable>
              <Grid.Row >
                <Grid.Column width={2}>
                  <StatusList user={user} currentDate={dateInput} />
                </Grid.Column>
                <Grid.Column width={14}>
                  <Segment>
                    <Header block={true} as="h4">
                      Статус устройства
                    </Header>
                    {/* <List className="text-left" divided selection>
                <List.Item>
                  <Label color="green" horizontal>
                    Пользователь
                  </Label>
                  user1@sberbank.ru
                </List.Item>
                <List.Item>
                  <Label color="purple" horizontal>
                    MAC
                  </Label>
                  00:50:56:85:5d:cd
                </List.Item>
                <List.Item>
                  <Label color="red" horizontal>
                    ID устройства
                  </Label>
                  r4t48uergh48834hrgg
                </List.Item>
                <List.Item>
                  <Label color="yellow" horizontal>
                    Параметр
                  </Label>
                  Параметр
                </List.Item>
              </List> */}
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Поле</Table.HeaderCell>
                          <Table.HeaderCell>Значение</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {user.length !== 0
                          ? Object.keys(currentUser.device).map(field => {
                              return (
                                <Table.Row key={field}>
                                  <Table.Cell width={3}>{field}</Table.Cell>
                                  <Table.Cell className="field-wrap"  width={8}>
                                    {currentUser.device[field]}
                                  </Table.Cell>
                                </Table.Row>
                              );
                            })
                          : null}
                      </Table.Body>
                    </Table>
                  </Segment>
                  <Segment>
                    <Header block={true} as="h4">
                      Текущая сеть: {currentUser.connection.ssid}
                    </Header>
                    {/* <List className="text-left" divided selection>
                <List.Item>
                  <Label color="green" horizontal>
                    Пользователь
                  </Label>
                  user1@sberbank.ru
                </List.Item>
                <List.Item>
                  <Label color="purple" horizontal>
                    MAC
                  </Label>
                  00:50:56:85:5d:cd
                </List.Item>
                <List.Item>
                  <Label color="red" horizontal>
                    ID устройства
                  </Label>
                  r4t48uergh48834hrgg
                </List.Item>
                <List.Item>
                  <Label color="yellow" horizontal>
                    Параметр
                  </Label>
                  Параметр
                </List.Item>
              </List> */}
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Поле</Table.HeaderCell>
                          <Table.HeaderCell>Значение</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {user.length !== 0
                          ? Object.keys(currentUser.connection).map(field => {
                              return (
                                <Table.Row key={field}>
                                  <Table.Cell width={3}>{field}</Table.Cell>
                                  <Table.Cell width={8}>
                                    {currentUser.connection[field]}
                                  </Table.Cell>
                                </Table.Row>
                              );
                            })
                          : null}
                      </Table.Body>
                    </Table>
                  </Segment>
                  <Segment>
                    <Header block={true} as="h4">
                      Test Kit
                    </Header>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Поле</Table.HeaderCell>
                          <Table.HeaderCell>Значение</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {user.length !== 0
                          ? Object.keys(currentUser.testKit).map(field => {
                              return (
                                <Table.Row key={field}>
                                  <Table.Cell width={3}>{field}</Table.Cell>
                                  <Table.Cell width={8}>
                                    {currentUser.connection[field]}
                                  </Table.Cell>
                                </Table.Row>
                              );
                            })
                          : null}
                      </Table.Body>
                    </Table>
                  </Segment>
                  <Segment>
                    <Header block={true} as="h4">
                      Комментарий пользователя
                    </Header>
                    <p>{currentUser.comment}</p>

                    <Header block={true} as="h4">
                      Список сетей
                    </Header>
                    {/* <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Поле</Table.HeaderCell>
                    <Table.HeaderCell>Значение</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {user.length !== 0
                    ? Object.keys(currentUser.connection).map(field => {
                        return (
                          <Table.Row key={field}>
                            <Table.Cell>{field}</Table.Cell>
                            <Table.Cell>
                              {currentUser.connection[field]}
                            </Table.Cell>
                          </Table.Row>
                        );
                      })
                    : null}
                </Table.Body>
              </Table> */}

                    {currentUser.networks.map((network, i) => {
                      return (
                        <Table celled key={i}>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Поле</Table.HeaderCell>
                              <Table.HeaderCell>Значение</Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            {user.length !== 0
                              ? Object.keys(network).map(field => {
                                  return (
                                    <Table.Row key={field}>
                                      <Table.Cell width={3}>{field}</Table.Cell>
                                      <Table.Cell width={8}>{network[field]}</Table.Cell>
                                    </Table.Row>
                                  );
                                })
                              : null}
                          </Table.Body>
                        </Table>
                      );
                    })}
                    {/* {currentUser.networks.map(network => {
                return (
                  
                )
              }
              }))} */}
                    {/* Object.keys(network).map(field=> {
                return (
                  
                ) */}
                    {/* <div className="grid-test">
                {cards.map(card => {
                  return (
                    <NetWorkCard
                      key={card.name}
                      name={card.name}
                      ip4={card.ip4}
                      ip6={card.ip6}
                      bssid={card.bssid}
                      channel={card.channel}
                      update={card.update}
                    />
                  );
                })}
              </div> */}
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            {/* </Segment> */}
          </div>
        )}
      </>
      // }
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    status: state.status
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userStatusDateInputChange: (e, { value }) =>
      dispatch(userStatusDateInputChange(value))
    // userStatusFormInputChange: e =>
    //   dispatch(
    //     userStatusFormInputChange(
    //       e.target.getAttribute(["name"]),
    //       e.target.value
    //     )
    //   )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserStatus);
