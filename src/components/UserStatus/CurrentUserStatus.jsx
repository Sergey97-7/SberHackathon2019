import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Header,
  Segment,
  Table
} from "semantic-ui-react";
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
        name:  getUnixDate(req.measurementTime),
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
          <> <ScrollButton />
          <div className="current-user-status">
            <Header block={true} as="h4">
              История запросов пользователя: {currentUser.account.email}
            </Header>
            <Grid columns={2} stackable>
              <Grid.Row>
                <Grid.Column width={3} >
                  <StatusList
                    user={user}
                    currentDate={dateInput}
                    currentUserId={currentUserId}
                  />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Segment>
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
                          ? Object.keys(currentUser.device).map(field => {
                              return (
                                <Table.Row key={field}>
                                  <Table.Cell width={3}>{field}</Table.Cell>
                                  <Table.Cell className="field-wrap" width={8}>
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
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
      dispatch(userStatusDateInputChange(name,value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserStatus);
