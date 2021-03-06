/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { ButtonGroup, Button } from '@zendeskgarden/react-buttons';

const DefaultButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('daisy');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={setSelectedItem}>
      <Button value="daisy">Daisy</Button>
      <Button value="orchid">Orchid</Button>
      <Button value="lily">Lily</Button>
    </ButtonGroup>
  );
};

const PrimaryButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('jasmine');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={setSelectedItem}>
      <Button isPrimary value="jasmine">
        Jasmine
      </Button>
      <Button isPrimary value="marigold">
        Marigold
      </Button>
      <Button isPrimary value="sunflower">
        Sunflower
      </Button>
    </ButtonGroup>
  );
};

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row>
    <Col textAlign="center" sm>
      <DefaultButtonGroup />
    </Col>
    <StyledCol textAlign="center" sm>
      <PrimaryButtonGroup />
    </StyledCol>
  </Row>
);

export default Example;
