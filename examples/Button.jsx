import { Button, ButtonGroup } from '../dist/rnexui';

ReactDOM.render(<div>
    <Button>确定</Button>
    <Button iconCls='fa fa-mouse-pointer' onClick={(e)=>console.log('Clicked!', e, e.pageY, e.clientY)}>Click me!</Button>
    <Button iconCls='fa fa-mouse-pointer' size="lg">确定</Button>
    <Button iconCls='fa fa-mouse-pointer' size="sm">确定</Button>
    <Button iconCls='fa fa-mouse-pointer' type="primary">确定</Button>
    <Button iconCls='fa fa-mouse-pointer' type="dashed">确定</Button>
    <Button iconCls='fa fa-mouse-pointer' type="danger">确定</Button>
    <Button iconCls='fa fa-mouse-pointer' type="danger" block>确定</Button>
    <Button iconCls='fa fa-info' type="dashed" />
    <Button iconCls='fa fa-info' />
    <Button disabled>Disabled</Button>
    <hr />
    <ButtonGroup>
        <Button>确定</Button>
        <Button iconCls='fa fa-angle-down' />
    </ButtonGroup>
    <ButtonGroup>
        <Button  type="primary">确定</Button>
        <Button  type="primary" iconCls='fa fa-angle-down' />
    </ButtonGroup>
</div>, demo);