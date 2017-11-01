# blok

**DISCLAIMER**

This is currently in the early stages of development

This guide will eventually be moved to its own website

### Getting Started
---

```
npm install --save blok
```

### Usage
---

#### Import
---

```
import { Component, Component2 } from 'blok'
```

### Contents
---

- Blok
  - Header
  - Content
  - Footer

- Grid
  - Row
  - Column

- Link

- Text

#### Blok
---

**Header**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| color       | 'white' | string   | black, white, red, green, blue    | `<Blok.Header color='blue' />`             |
| link        |         | array    | *Custom array*                    | `<Blok.Header link={[{text: 'link1', linkRef: '/Linked', active: true}]} />`|
| linkRef     | '/'     | string   | *Custom String*                   | `<Blok.Header linkRef='/Home' />`          |
| raised      |         | string   | *Custom string*                   | `<Blok.Header raised />`                   |
| title       | 'Title' | string   | *Custom String*                   | `<Blok.Header heading='Hello' />`          |
| transparent |         | boolean  | true, false                       | `<Blok.Header transparent />`              |

```
<Blok.Header
  title='Title'
  link={[
    {text: 'link1'},
    {text: 'link2'}
  ]}
  raised 
/>
```

**Content**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| color       |         | string   | black, white, red, green, blue    | `<Blok.Content color='blue' />`            |
| divide      |         | boolean  | true, false                       | `<Blok.Content divide />`                  |
| kicker      |         | string   | *Custom string*                   | `<Blok.Content kicker='World' />`          |
| padded      |         | boolean  | true, false                       | `<Blok.Content padded />`                  |
| text        |         | array    | *Custom array*                    | `<Blok.Content text={[{text: 'para one'}]} />`|
| title       |         | string   | *Custom String*                   | `<Blok.Content title='Hello' />`         |

```
<Blok.Content
  title='Section One'
  kicker='The Begining'
  text={[
    {text: 'This is section one and this is a paragraph.'}
  ]}
  divide
  padded
/>
```

**Footer**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| color       | 'white' | string   | black, white, red, green, blue    | `<Blok.Footer color='blue' />`             |
| link        |         | array    | *Custom array*                    | `<Blok.Footer link={[{text: 'link1', linkRef: '#', active: true}]} />`|
| text        |         | string   | *Custom String*                   | `<Blok.Footer text='Hello' />`             |
| transparent |         | boolean  | true, false                       | `<Blok.Footer transparent />`              |

```
<Blok.Footer
  text='&copy; 2017 Company'
  link={[
    {text: 'link1'},
    {text: 'link2'}
  ]} 
/>
```

#### Grid
---

**Grid**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid className='custom-class' />`        |
| color       |         | string   | black, white, red, green, blue    | `<Grid color='blue' />`                    |
| font        |         | string   | heading, body, secondary, highlight| `<Grid font='heading' />`                  |
| raised      |         | boolean  | true, false                       | `<Grid raised />`                          |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Grid size='large' />`                    |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid textAlign='middle' />`              |

**Row**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid.Row className='custom-class' />`    |
| color       |         | string   | black, white, red, green, blue    | `<Grid.Row color='blue' />`                |
| font        |         | string   | heading, body, secondary, highlight| `<Grid.Row font='heading' />`              |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Grid.Row size='large' />`                |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid.Row textAlign='middle' />`          |

**Column**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid.Column className='custom-class' />` |
| color       |         | string   | black, white, red, green, blue    | `<Grid.Column color='blue' />`             |
| font        |         | string   | heading, body, secondary, highlight| `<Grid.Column font='heading' />`           |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Grid.Column size='large' />`             |
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

#### Link
---

**Link**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| active      | 'false' | boolean  | true, false                       | `<Link active />`                          |
| className   |         | string   | *Custom classes*                  | `<Link className='custom-class' />`        |
| color       |         | string   | black, white, red, green, blue    | `<Link color='blue' />`                    |
| font        | 'body'  | string   | heading, body, secondary, highlight| `<Link font='heading' />`                  |
| linkRef     | '#'     | string   | *Custom href*                     | `<Link linkRef='www.website.com' />`       |
| size        | 'h4'    | string   | text, quote, h4, h3, h2, h1       | `<Link size='large' />`                    |
| text        |         | string   | *Custom string*                   | `<Link text='Link to Website' />`          |

```
<Link linkRef='www.website.com' text='Website' active />
```

#### Text
---

**Text**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Text className='custom-class' />`        |
| font        |         | string   | heading, body, secondary, highlight| `<Text font='heading' />`                 |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Text size='text' />`                     |
| tag         | 'p'     | string   | p, h4, h3, h2, h1                 | `<Text tag='h1' />`                        |
| text        |         | string   | *Custom string*                   | `<Text text='Hello World' />`              |
| textAlign   |         | string   | left, middle, right, justified    | `<Text textAlign='middle' />`              |

```
<Text font='body' size='p' text='This is my custom text' />
```