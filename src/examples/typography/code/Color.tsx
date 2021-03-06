/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row>
    <Col sm={4} textAlign="center">
      <Code hue="green">Veggies es bonus</Code>
    </Col>
    <StyledCol sm={4} textAlign="center">
      <Code hue="yellow">Veggies es bonus</Code>
    </StyledCol>
    <StyledCol sm={4} textAlign="center">
      <Code hue="red">Veggies es bonus</Code>
    </StyledCol>
  </Row>
);

export default Example;
