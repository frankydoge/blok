# blok

### Getting Started

```
npm install --save blok
```

### Usage

##### Import

```
import { Component, Component2 } from 'blok'
```

##### Grid

**Grid**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid className='custom-class' />`        |
| color       |         | string   | black, white, red, green, blue    | `<Grid color='blue' />`                    |
| font        |         | string   | heading, body                     | `<Grid font='heading' />`                  |
| raised      |         | boolean  | true, false                       | `<Grid raised />`                          |
| size        |         | string   | tiny, small, regular, large, huge | `<Grid size='large' />`                    |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid textAlign='middle' />`              |

**Row**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid.Row className='custom-class' />`    |
| color       |         | string   | black, white, red, green, blue    | `<Grid.Row color='blue' />`                |
| font        |         | string   | heading, body                     | `<Grid.Row font='heading' />`              |
| size        |         | string   | tiny, small, regular, large, huge | `<Grid.Row size='large' />`                |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid.Row textAlign='middle' />`          |

**Column**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid.Column className='custom-class' />` |
| color       |         | string   | black, white, red, green, blue    | `<Grid.Column color='blue' />`             |
| font        |         | string   | heading, body                     | `<Grid.Column font='heading' />`           |
| size        |         | string   | tiny, small, regular, large, huge | `<Grid.Column size='large' />`             |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid.Column textAlign='middle' />`       |
| width       |         | number   | 1, 2, 3, 4, 5, 6, 7, 8            | `<Grid.Column width={2} />`                |


```
<Grid raised color='blue'>
  <Grid.Row className='my-row'>
    <Grid.Column width={2} textAlign='middle'>Hello</Grid.Column>
    <Grid.Column width={6} textAlign='right'>World</Grid.Column>
  <Grid.Row>
</Grid>
```

##### Heading

**Heading**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Heading className='custom-class' />`     |
| font        |         | string   | heading, body                     | `<Heading font='heading' />`               |
| size        |         | string   | tiny, small, regular, large, huge | `<Heading size='large' />`                 |
| tag         | h1      | string   | h1, h2, h3, h4, h5, h6            | `<Heading tag='h3' />`                     |
| text        |         | string   | *Custom string*                   | `<Heading text='Hello World' />`           |

```
<Heading font='body' text='Hello World' />
```

##### Link

**Link**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| active      |         | boolean  | true, false                       | `<Link active />`                          |
| className   |         | string   | *Custom classes*                  | `<Link className='custom-class' />`        |
| color       |         | string   | black, white, red, green, blue    | `<Link color='blue' />`                    |
| font        |         | string   | heading, body                     | `<Link font='heading' />`                  |
| linkRef     |         | string   | *Custom href*                     | `<Link linkRef='www.website.com' />`       |
| size        |         | string   | tiny, small, regular, large, huge | `<Link size='large' />`                    |
| text        |         | string   | *Custom string*                   | `<Link text='Link to Website' />`          |

```
<Link linkRef='www.website.com' text='Website' active />
```

##### Panel

**Panel**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Panel className='custom-class' />`       |
| color       |         | string   | black, white, red, green, blue    | `<Panel color='blue' />`                   |
| heading     |         | string   | *Custom string*                   | `<Panel heading='Title' />`                |
| link        |         | array    | *Custom array*                    | `<Panel link={[{text:'a',linkRef:'/a'}/>`  |
| side        | top     | string   | top, left, right                  | `<Panel side='right' />`                   |

**Top**
```
<Panel
  heading='Title'
  link={[
    {text: 'Click', linkRef: 'www.click.com'},
    {text: 'Here', linkRef: 'www.click.com/here'}
  ]}
/>
```

**Side**
```
<Panel
  heading='Title'
  side='left'
  link={[
    {text: 'Click', linkRef: 'www.click.com'},
    {text: 'Here', linkRef: 'www.click.com/here'}
  ]}
>
  /* Insert Code For Website In Panel Component As A Child */
</Panel>
```