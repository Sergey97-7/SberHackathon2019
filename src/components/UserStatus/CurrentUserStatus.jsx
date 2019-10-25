import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Header, Segment, Table, Label } from "semantic-ui-react";
import moment from "moment";
import { userStatusDateInputChange } from "../../actions/statusAction";
import { getUnixDate } from "../../utils/tools";
import ScrollButton from "../ScrollButton";
import StatusList from "./StatusList";
class CurrentUserStatus extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  getDateSelectOptions = () => {
    const { user } = this.props.status;
    return user.map((req, i) => {
      return {
        key: i,
        name: getUnixDate(req.measurementTime),
        value: req.id,
        text: moment(getUnixDate(req.measurementTime)).format(
          "DD-MM-YYYY, HH:mm:ss"
        )
      };
    });
  };

  render() {
    const {
      error,
      isLoading,
      user,
      dateInput,
      currentUserId
    } = this.props.status;
    let currentUser;
    if (!error.hasErrored && !isLoading && user !== null) {
      currentUser = user.find(user => currentUserId === user.id);
    }
    return (
      <>
        {error.hasErrored ? (
          <div>Ошибка: {error.msg.toString()}</div>
        ) : isLoading || user === null ? (
          <div>Загрузка...</div>
        ) : (
          <>
            {" "}
            <ScrollButton />
            <div className="current-user-status">
              <Header block={true} as="h4">
                Номер отчета: {currentUser.id}
                <Header.Subheader>
                  История запросов пользователя: {currentUser.account.email}
                </Header.Subheader>
              </Header>
              <div className="curent-user-status-row ">
                <StatusList
                  user={user}
                  currentDate={dateInput}
                  currentUserId={currentUserId}
                />
                <div className="curent-user-status-column-2">
                  <Segment className="segment-custom-media">
                    <Header block={true} as="h4">
                      Статус устройства
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
                          ? Object.keys(currentUser.device)
                              .filter(field => field !== "deviceId")
                              .map(field => {
                                return (
                                  <Table.Row key={field}>
                                    <Table.Cell width={2}>{field}</Table.Cell>
                                    <Table.Cell
                                      className="field-wrap"
                                      width={8}
                                    >
                                      {currentUser.device[field]}
                                    </Table.Cell>
                                  </Table.Row>
                                );
                              })
                          : null}
                      </Table.Body>
                    </Table>
                  </Segment>
                  <Segment className="segment-custom-media">
                    <Header block={true} as="h4">
                      Текущая сеть: {currentUser.connection.ssid}
                    </Header>
                    <Table unstackable celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Поле</Table.HeaderCell>
                          <Table.HeaderCell>Значение</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {user.length !== 0
                          ? Object.keys(currentUser.connection)
                              .filter(field => field !== "id")
                              .map(field => {
                                return (
                                  <Table.Row key={field}>
                                    <Table.Cell width={2}>{field}</Table.Cell>
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
                  <Segment className="segment-custom-media">
                    <Header block={true} as="h4">
                      Test Kit
                    </Header>
                    <Table unstackable celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Поле</Table.HeaderCell>
                          <Table.HeaderCell>Значение</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {user.length !== 0
                          ? Object.keys(currentUser.testKit)
                              .filter(field => field !== "id" && field !== "speed" && field !== "ports")
                              .map(field => {
                                return (
                                  <Table.Row key={field}>
                                    <Table.Cell width={2}>{field}</Table.Cell>
                                    <Table.Cell width={8}>
                                      {currentUser.connection[field]}
                                    </Table.Cell>
                                  </Table.Row>
                                );
                              })
                          : null}
                      </Table.Body>
                    </Table>
                    <Header block={true} as="h4">
                      Тесты скорости
                    </Header>
                    <Table unstackable celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Время</Table.HeaderCell>
                          <Table.HeaderCell>Скорость передачи</Table.HeaderCell>
                          <Table.HeaderCell>Тип</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {user.length !== 0 && currentUser.testKit.speed.length !== 0
                          ? currentUser.testKit.speed.map((test, i) => {
                              return (
                                <Table.Row key={i}>
                                  <Table.Cell width={2}>{test.time}</Table.Cell>
                                  <Table.Cell width={2}>
                                    {`${test.value} Мбит/с` }
                                  </Table.Cell>
                                  <Table.Cell width={2}>{test.type}</Table.Cell>
                                </Table.Row>
                              );
                            })
                          : null}
                      </Table.Body>
                    </Table>
                  </Segment>
                  <Segment className="segment-custom-media">
                  <Header block={true} as="h4">
                      Открытые порты
                    </Header>
                    <div className="current-user-status-btn-ports-container">
                    {user.length !== 0 && currentUser.testKit.ports.length !== 0 ? currentUser.testKit.ports.map((port,i)=> {
                      return <Label key={i} color='green' horizontal>{port}</Label>
                    }) : null}
                    </div>
                  </Segment>
                  <Segment className="segment-custom-media">
                    <Header block={true} as="h4">
                      Комментарий пользователя
                    </Header>
                    <p>{currentUser.comment}</p>

                    <Header block={true} as="h4">
                      Список сетей
                    </Header>
                    {currentUser.networks.map((network, i) => {
                      return (
                        <Table unstackable celled key={i}>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Поле</Table.HeaderCell>
                              <Table.HeaderCell>Значение</Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            {user.length !== 0
                              ? Object.keys(network)
                                  .filter(field => field !== "id")
                                  .map(field => {
                                    return (
                                      <Table.Row key={field}>
                                        <Table.Cell width={2}>
                                          {field}
                                        </Table.Cell>
                                        <Table.Cell width={8}>
                                          {network[field]}
                                        </Table.Cell>
                                      </Table.Row>
                                    );
                                  })
                              : null}
                          </Table.Body>
                        </Table>
                      );
                    })}
                  </Segment>
                </div>
              </div>
              {/* <Grid>
                <Grid.Row>
                  <Grid.Column width={3}></Grid.Column>
                  <Grid.Column width={13} id="custom-padding"></Grid.Column>
                </Grid.Row>
              </Grid> */}
            </div>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    status: state.status
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userStatusDateInputChange: (e, { name, value }) =>
      dispatch(userStatusDateInputChange(name, value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserStatus);
