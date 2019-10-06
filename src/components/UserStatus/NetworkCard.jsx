import React, { Component } from "react";
import { Segment, Label, List } from "semantic-ui-react";
import moment from "moment";
class NetworkCard extends Component {
  render() {
    const { name, ip4, ip6, bssid, channel, update } = this.props;
    return (
      <Segment>
        <List divided selection>
          <List.Item>
            <Label color="green" horizontal>
              Имя сети
            </Label>
            {name}
          </List.Item>
          <List.Item>
            <Label color="green" horizontal>
              IP4
            </Label>
            {ip4}
          </List.Item>
          <List.Item>
            <Label color="green" horizontal>
              IP6
            </Label>
            {ip6}
          </List.Item>
          <List.Item>
            <Label color="green" horizontal>
              BSSID:
            </Label>
            {bssid}
          </List.Item>
          <List.Item>
            <Label color="green" horizontal>
              Channel
            </Label>
            {channel}
          </List.Item>
          <List.Item>
            <Label color="green" horizontal>
              Обновлено
            </Label>
            {moment(update).format("MM Do YYYY, hh:mm:ss")}
          </List.Item>
        </List>
      </Segment>
    );
  }
}
export default NetworkCard;
