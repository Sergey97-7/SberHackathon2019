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
class CurrentUserStatus extends Component {
  render() {
    const countryOptions = [
      { key: "af", value: "af", text: "Afghanistan" },
      { key: "ax", value: "ax", text: "Aland Islands" },
      { key: "al", value: "al", text: "Albania" },
      { key: "dz", value: "dz", text: "Algeria" },
      { key: "as", value: "as", text: "American Samoa" },
      { key: "ad", value: "ad", text: "Andorra" },
      { key: "ao", value: "ao", text: "Angola" },
      { key: "ai", value: "ai", text: "Anguilla" },
      { key: "ag", value: "ag", text: "Antigua" },
      { key: "ar", value: "ar", text: "Argentina" },
      { key: "am", value: "am", text: "Armenia" },
      { key: "aw", value: "aw", text: "Aruba" },
      { key: "au", value: "au", text: "Australia" },
      { key: "at", value: "at", text: "Austria" },
      { key: "az", value: "az", text: "Azerbaijan" },
      { key: "bs", value: "bs", text: "Bahamas" },
      { key: "bh", value: "bh", text: "Bahrain" },
      { key: "bd", value: "bd", text: "Bangladesh" },
      { key: "bb", value: "bb", text: "Barbados" },
      { key: "by", value: "by", text: "Belarus" },
      { key: "be", value: "be", text: "Belgium" },
      { key: "bz", value: "bz", text: "Belize" },
      { key: "bj", value: "bj", text: "Benin" },
      { key: "af", value: "af", text: "Afghanistan" },
      { key: "ax", value: "ax", text: "Aland Islands" },
      { key: "al", value: "al", text: "Albania" },
      { key: "dz", value: "dz", text: "Algeria" },
      { key: "as", value: "as", text: "American Samoa" },
      { key: "ad", value: "ad", text: "Andorra" },
      { key: "ao", value: "ao", text: "Angola" },
      { key: "ai", value: "ai", text: "Anguilla" },
      { key: "ag", value: "ag", text: "Antigua" },
      { key: "ar", value: "ar", text: "Argentina" },
      { key: "am", value: "am", text: "Armenia" },
      { key: "aw", value: "aw", text: "Aruba" },
      { key: "au", value: "au", text: "Australia" },
      { key: "at", value: "at", text: "Austria" },
      { key: "az", value: "az", text: "Azerbaijan" },
      { key: "bs", value: "bs", text: "Bahamas" },
      { key: "bh", value: "bh", text: "Bahrain" },
      { key: "bd", value: "bd", text: "Bangladesh" },
      { key: "bb", value: "bb", text: "Barbados" },
      { key: "by", value: "by", text: "Belarus" },
      { key: "be", value: "be", text: "Belgium" },
      { key: "bz", value: "bz", text: "Belize" },
      { key: "bj", value: "bj", text: "Benin" },
      { key: "bj3s3", value: "bhgj2", text: "4Bexcvnnin" },
      { key: "bj3s3s", value: "bbnj2", text: "4Benxbnin" },
      { key: "bj3s3qw", value: "bszj2", text: "4Bxcvnenin" },
      { key: "bj3s3d", value: "bj32", text: "4Bencvin" },
      { key: "bj3sdf3", value: "bwej2", text: "4Befnin" },
      { key: "bjsdf3s3", value: "brj2", text: "4fBenin" },
      { key: "bj33s3", value: "bjwes2", text: "4Befnssin" },
      { key: "bj3dsfs3", value: "bwerj2", text: "4Bevnin" },
      { key: "bj3ds3", value: "bj2ewr", text: "4Becfsnin" },
      { key: "bj3s3", value: "bwerj2", text: "4Bednibbbn" },
      { key: "bj3s3", value: "bjeewr2", text: "4Bexvvvnin" },
      { key: "bj3ds3", value: "bj23ew", text: "4Becccnin" },
      { key: "bj3ds3", value: "bj2dsf", text: "4Bexxnin" },
      { key: "bj3s3", value: "bj2dfs", text: "4Benzzin" },
      { key: "bj33zzs3", value: "bjfsdf2", text: "zz" },
      { key: "bj3z34234s3", value: "bjdsf2", text: "4Besdnin" },
      { key: "bj3x342s3", value: "bjxd2", text: "dfw" },
      { key: "bj3x42s3", value: "bjz2", text: "eeee" },
      { key: "bj3xs3", value: "bcj2", text: "e" },
      { key: "bj3x23423s3", value: "bjf2", text: "4Bednin" },
      { key: "bj3c234s3", value: "bj2df", text: "4Bdsdenin" },
      { key: "bj3vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3r4234vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjr233vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3vef3s3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3rvs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3efsdfvs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3ewfvs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3vsdfs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjsdf3vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bj3vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "fds", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjsdff3vsfs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjsdf3vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "zxd", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjsdcvf3vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "xcv", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "xcvxc", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "xcv", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "xcdsv", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjsdf3vs3", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "f", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "zxcvzxc", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "dsdfsdv", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "xcvzxcv", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "sdfsdf", value: "bsdfj2", text: "4Befsgsgnin" },
      { key: "bjsdfzxcv3vs3", value: "bsdfj2", text: "4Befsgsgnin" }
    ];
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
    return (
      <div className="current-user-status">
        <Segment className="tts">
          <Header block="true" as="h4">
            История запросов
          </Header>
          <Select block="true" placeholder="Время" options={countryOptions} />
        </Segment>
        <Segment>
          <Header block="true" as="h4">
            Статус устройства
          </Header>
          <List className="text-left" divided selection>
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
          </List>
        </Segment>
        <Segment>
          <Header block="true" as="h4">
            Список сетей
          </Header>
          <div className="grid-test">
            {cards.map(card => {
              return (
                <NetWorkCard
                  name={card.name}
                  ip4={card.ip4}
                  ip6={card.ip6}
                  bssid={card.bssid}
                  channel={card.channel}
                  update={card.update}
                />
              );
            })}
          </div>
        </Segment>
      </div>
    );
  }
}
export default CurrentUserStatus;
