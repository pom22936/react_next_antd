import Layouts from '../components/Layouts'
import React, { Component } from "react";
import { Icon, Input, AutoComplete } from 'antd';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const dataSource = [{
    title: 'test1',
    children: [{
        title: 'AntDesign',
        count: 10000,
    }, {
        title: 'AntDesign UI',
        count: 10600,
    }],
}, {
    title: 'palm',
    children: [{
        title: 'AntDesign UI palm',
        count: 60100,
    }, {
        title: 'AntDesign palm',
        count: 30010,
    }],
}, {
    title: 'pop',
    children: [{
        title: 'AntDesign pop',
        count: 100000,
    }],
}];

function renderTitle(title) {
    return (
        <span>
            {title}
            <a
                style={{ float: 'right' }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >company</a>
        </span>
    );
}

const options = dataSource.map(group => (
    <OptGroup
        key={group.title}
        label={renderTitle(group.title)}
    >
        {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
                {opt.title}
                <span className="certain-search-item-count">{opt.count} data 1</span>
            </Option>
        ))}
    </OptGroup>
)).concat([
    <Option disabled key="all" className="show-all">
        <a
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            all
      </a>
    </Option>,
]);

export default class Front_skill extends Component {
    render() {
        return (
            <div>
                <Layouts>
                    <div>
                        <h1>Front_skill .page</h1>
                        <div className="certain-category-search-wrapper" style={{ width: 250 }}>
                            <AutoComplete
                                className="certain-category-search"
                                dropdownClassName="certain-category-search-dropdown"
                                dropdownMatchSelectWidth={false}
                                dropdownStyle={{ width: 300 }}
                                size="large"
                                style={{ width: '100%' }}
                                dataSource={options}
                                placeholder="input here"
                                optionLabelProp="value"
                            >
                                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                            </AutoComplete>
                        </div>
                    </div>
                </Layouts>
            </div>
        )
    }
}