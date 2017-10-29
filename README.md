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
  - Content
  - Header

- Grid
  - Row
  - Column

- Heading

- Line

- Link

- Text

#### Blok
---

**Content**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| color       |         | string   | black, white, red, green, blue    | `<Blok.Content color='blue' />`            |
| description |         | array    | *Custom array*                    | `<Blok.Content description={[{text: 'para one'}]} />`|
| divide      |         | boolean  | true, false                       | `<Blok.Content divide />`                  |
| heading     |         | string   | *Custom String*                   | `<Blok.Content heading='Hello' />`         |
| kicker      |         | string   | *Custom string*                   | `<Blok.Content kicker='World' />`          |
| padded      |         | boolean  | true, false                       | `<Blok.Content padded />`                  |

```
<Blok.Content
  heading='Section One'
  kicker='The Begining'
  divide
  padded
  description={[
    {text: 'This is section one and this is a paragraph.'}
  ]}
/>
```

**Header**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| color       | 'white' | string   | black, white, red, green, blue    | `<Blok.Header color='blue' />`             |
| heading     | 'Title' | string   | *Custom String*                   | `<Blok.Header heading='Hello' />`          |
| link        |         | array    | *Custom array*                    | `<Blok.Header link={[{text: 'link1', linkRef: '#', active: true}]} />`|
| raised      |         | string   | *Custom string*                   | `<Blok.Header raised />`                   |
| transparent |         | boolean  | true, false                       | `<Blok.Header transparent />`              |

```
<Blok.Header
  heading='Title'
  link={[
    {text: 'link1'},
    {text: 'link2'}
  ]}
  raised 
/>
```

#### Grid
---

**Grid**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid className='custom-class' />`        |
| color       |         | string   | black, white, red, green, blue    | `<Grid color='blue' />`                    |
| font        |         | string   | heading, body, fancy              | `<Grid font='heading' />`                  |
| raised      |         | boolean  | true, false                       | `<Grid raised />`                          |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Grid size='large' />`                    |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid textAlign='middle' />`              |

**Row**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid.Row className='custom-class' />`    |
| color       |         | string   | black, white, red, green, blue    | `<Grid.Row color='blue' />`                |
| font        |         | string   | heading, body, fancy              | `<Grid.Row font='heading' />`              |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Grid.Row size='large' />`                |
| textAlign   |         | string   | left, middle, right, justified    | `<Grid.Row textAlign='middle' />`          |

**Column**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Grid.Column className='custom-class' />` |
| color       |         | string   | black, white, red, green, blue    | `<Grid.Column color='blue' />`             |
| font        |         | string   | heading, body, fancy              | `<Grid.Column font='heading' />`           |
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

#### Heading
---

**Heading**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| className   |         | string   | *Custom classes*                  | `<Heading className='custom-class' />`     |
| font        |         | string   | heading, body, fancy              | `<Heading font='heading' />`               |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Heading size='large' />`                 |
| tag         | h1      | string   | p, h1, h2, h3, h4, h5, h6         | `<Heading tag='h3' />`                     |
| text        |         | string   | *Custom string*                   | `<Heading text='Hello World' />`           |
| textAlign   |         | string   | *Custom string*                   | `<Heading text='Hello World' />`           |

```
<Heading font='body' text='Hello World' />
```

#### Line
---

**Line**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| small       |         | boolean  | true, false                       | `<Line small />`                           |

```
<Line small />
```

#### Link
---

**Link**

| Name        | Default | Type     | Options                           | Use                                        |
|-------------|---------|----------|-----------------------------------|--------------------------------------------|
| active      |         | boolean  | true, false                       | `<Link active />`                          |
| className   |         | string   | *Custom classes*                  | `<Link className='custom-class' />`        |
| color       |         | string   | black, white, red, green, blue    | `<Link color='blue' />`                    |
| font        |         | string   | heading, body, fancy              | `<Link font='heading' />`                  |
| linkRef     |         | string   | *Custom href*                     | `<Link linkRef='www.website.com' />`       |
| size        |         | string   | text, quote, h4, h3, h2, h1       | `<Link size='large' />`                    |
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
| text        |         | string   | *Custom string*                   | `<Text text='Hello World' />`              |

```
<Text text='This is my custom text' />
```