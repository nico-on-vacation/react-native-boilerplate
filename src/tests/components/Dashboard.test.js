import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from '../../components/DashboardPage'

test('should render ExpenseDashboard correctly', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
})