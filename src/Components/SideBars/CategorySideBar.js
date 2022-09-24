import React from 'react'
import ExploreIcon from '@rsuite/icons/Explore';
// import ReactDOM from 'react-dom';

import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

import styles from '../../Assets/CSS/CategorySideBar.css';

export default function CategorySideBar() {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');
    return (
        <>
            <div>
                <div className={styles.sidebar} style={{ width: 240 }}>
                    {/* <Toggle
                    onChange={setExpanded}
                    checked={expanded}
                    checkedChildren="Expand"
                    unCheckedChildren="Collapse"
                /> */}
                    <hr />
                    <Sidenav className={styles.nav} expanded={expanded} defaultOpenKeys={['3', '4']}>
                        <Sidenav.Body className={styles.nav}>
                            <Nav activeKey={activeKey} onSelect={setActiveKey}>
                                <Nav.Item eventKey="1" icon={<DashboardIcon />} className={styles.navItem}>
                                    Products
                                </Nav.Item>
                                {/* <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                User Group
                            </Nav.Item> */}
                                <Nav.Menu placement="rightStart" eventKey="3" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="4" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="5" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="6" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="7" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="8" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="9" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu placement="rightStart" eventKey="10" title="Category 1" icon={<ExploreIcon />}>
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu
                                    placement="rightStart"
                                    eventKey="11"
                                    title="Settings"
                                    icon={<GearCircleIcon />}
                                >
                                    <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                    <Nav.Item eventKey="4-2">Channels</Nav.Item>
                                    <Nav.Item eventKey="4-3">Versions</Nav.Item>
                                    <Nav.Menu eventKey="4-5" title="Custom Action">
                                        <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                        <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                                    </Nav.Menu>
                                </Nav.Menu>
                            </Nav>
                        </Sidenav.Body>
                        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
                    </Sidenav>
                </div>
            </div>
        </>
    )
}
