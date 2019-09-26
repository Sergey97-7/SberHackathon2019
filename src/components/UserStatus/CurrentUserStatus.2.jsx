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
class CurrentUserStatus extends Component {
  getDateSelectOptions = () => {
    const { user } = this.props.status;
    return user.map((req, i) => {
      return {
        key: i,
        value: req.timestamp,
        text: moment(req.timestamp).format("DD-MM-YYYY, HH:mm:ss")
      };
    });
  };
  render() {
    const countryOptions = [{ key: "af", value: "af", text: "Afghanistan" }];
    const cards = [
      {
        name: " сеть1",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть2",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть3",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть4",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть5",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть6",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть7",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      }
    ];
    const { error, isLoading, user, dateInput } = this.props.status;
    let currentUser;
    if (!error.hasErrored && !isLoading && user !== null)
      currentUser = user.find(user => dateInput === user.timestamp);
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
            <Segment className="tts">
              <Header block={true} as="h4">
                История запросов пользователя: {user[0].email}
                <Header.Subheader>
                  {/* Date: {user.date} */}
                  Время: {moment(dateInput).format("DD-MM-YYYY, HH:MM:SS")}
                </Header.Subheader>
              </Header>
              <Select
                placeholder="Время"
                // defaultValue={user[0].timestamp}
                value={dateInput}
                onChange={this.props.userStatusDateInputChange}
                options={this.getDateSelectOptions()}
              />
            </Segment>
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
                            <Table.Cell>{field}</Table.Cell>
                            <Table.Cell>{currentUser.device[field]}</Table.Cell>
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
                            <Table.Cell>{field}</Table.Cell>
                            <Table.Cell>
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
                                <Table.Cell>{field}</Table.Cell>
                                <Table.Cell>{network[field]}</Table.Cell>
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
