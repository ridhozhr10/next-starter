import React, { Component } from "react";
import Head from "next/head";

type Props = {
  title: string;
  children: any;
};

export class Layout extends Component<Props> {
  state = {};

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Head>
          <title>Portal Legal PT.PP Persero - {title}</title>
        </Head>
        {children}
      </div>
    );
  }
}
