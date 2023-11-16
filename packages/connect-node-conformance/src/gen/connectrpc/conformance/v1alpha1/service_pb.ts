// Copyright 2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.3.3 with parameter "ts_nocheck=false,target=ts"
// @generated from file connectrpc/conformance/v1alpha1/service.proto (package connectrpc.conformance.v1alpha1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";

/**
 * A definition of a response to be sent from a single-response endpoint.
 * Can be used to define a response for unary or client-streaming calls.
 *
 * @generated from message connectrpc.conformance.v1alpha1.UnaryResponseDefinition
 */
export class UnaryResponseDefinition extends Message<UnaryResponseDefinition> {
  /**
   * Response headers to send
   *
   * @generated from field: repeated connectrpc.conformance.v1alpha1.Header response_headers = 1;
   */
  responseHeaders: Header[] = [];

  /**
   * @generated from oneof connectrpc.conformance.v1alpha1.UnaryResponseDefinition.response
   */
  response: {
    /**
     * Response message to send
     *
     * @generated from field: bytes response_data = 2;
     */
    value: Uint8Array;
    case: "responseData";
  } | {
    /**
     * Error to raise instead of response message
     *
     * @generated from field: connectrpc.conformance.v1alpha1.Error error = 3;
     */
    value: Error;
    case: "error";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * Response trailers to send - together with the error if present
   *
   * @generated from field: repeated connectrpc.conformance.v1alpha1.Header response_trailers = 4;
   */
  responseTrailers: Header[] = [];

  constructor(data?: PartialMessage<UnaryResponseDefinition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.UnaryResponseDefinition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_headers", kind: "message", T: Header, repeated: true },
    { no: 2, name: "response_data", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "response" },
    { no: 3, name: "error", kind: "message", T: Error, oneof: "response" },
    { no: 4, name: "response_trailers", kind: "message", T: Header, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryResponseDefinition {
    return new UnaryResponseDefinition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryResponseDefinition {
    return new UnaryResponseDefinition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryResponseDefinition {
    return new UnaryResponseDefinition().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryResponseDefinition | PlainMessage<UnaryResponseDefinition> | undefined, b: UnaryResponseDefinition | PlainMessage<UnaryResponseDefinition> | undefined): boolean {
    return proto3.util.equals(UnaryResponseDefinition, a, b);
  }
}

/**
 * A definition of responses to be sent from a streaming endpoint.
 * Can be used to define responses for server-streaming or bidi-streaming calls.
 *
 * @generated from message connectrpc.conformance.v1alpha1.StreamResponseDefinition
 */
export class StreamResponseDefinition extends Message<StreamResponseDefinition> {
  /**
   * Response headers to send
   *
   * @generated from field: repeated connectrpc.conformance.v1alpha1.Header response_headers = 1;
   */
  responseHeaders: Header[] = [];

  /**
   * Response messages to send
   *
   * @generated from field: repeated bytes response_data = 2;
   */
  responseData: Uint8Array[] = [];

  /**
   * Wait this many milliseconds before sending each response message
   *
   * @generated from field: uint32 response_delay_ms = 3;
   */
  responseDelayMs = 0;

  /**
   * Optional error to raise, but only after sending the response messages
   *
   * @generated from field: connectrpc.conformance.v1alpha1.Error error = 4;
   */
  error?: Error;

  /**
   * Response trailers to send - together with the error if present
   *
   * @generated from field: repeated connectrpc.conformance.v1alpha1.Header response_trailers = 5;
   */
  responseTrailers: Header[] = [];

  constructor(data?: PartialMessage<StreamResponseDefinition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.StreamResponseDefinition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_headers", kind: "message", T: Header, repeated: true },
    { no: 2, name: "response_data", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 3, name: "response_delay_ms", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "error", kind: "message", T: Error },
    { no: 5, name: "response_trailers", kind: "message", T: Header, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamResponseDefinition {
    return new StreamResponseDefinition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamResponseDefinition {
    return new StreamResponseDefinition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamResponseDefinition {
    return new StreamResponseDefinition().fromJsonString(jsonString, options);
  }

  static equals(a: StreamResponseDefinition | PlainMessage<StreamResponseDefinition> | undefined, b: StreamResponseDefinition | PlainMessage<StreamResponseDefinition> | undefined): boolean {
    return proto3.util.equals(StreamResponseDefinition, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.UnaryRequest
 */
export class UnaryRequest extends Message<UnaryRequest> {
  /**
   * The response definition which should be returned in the conformance payload
   *
   * @generated from field: connectrpc.conformance.v1alpha1.UnaryResponseDefinition response_definition = 1;
   */
  responseDefinition?: UnaryResponseDefinition;

  constructor(data?: PartialMessage<UnaryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.UnaryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_definition", kind: "message", T: UnaryResponseDefinition },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryRequest {
    return new UnaryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryRequest {
    return new UnaryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryRequest {
    return new UnaryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryRequest | PlainMessage<UnaryRequest> | undefined, b: UnaryRequest | PlainMessage<UnaryRequest> | undefined): boolean {
    return proto3.util.equals(UnaryRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.UnaryResponse
 */
export class UnaryResponse extends Message<UnaryResponse> {
  /**
   * The conformance payload to respond with.
   *
   * @generated from field: connectrpc.conformance.v1alpha1.ConformancePayload payload = 1;
   */
  payload?: ConformancePayload;

  constructor(data?: PartialMessage<UnaryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.UnaryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payload", kind: "message", T: ConformancePayload },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryResponse {
    return new UnaryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryResponse {
    return new UnaryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryResponse {
    return new UnaryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryResponse | PlainMessage<UnaryResponse> | undefined, b: UnaryResponse | PlainMessage<UnaryResponse> | undefined): boolean {
    return proto3.util.equals(UnaryResponse, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ServerStreamRequest
 */
export class ServerStreamRequest extends Message<ServerStreamRequest> {
  /**
   * The response definition which should be returned in the conformance payload.
   *
   * @generated from field: connectrpc.conformance.v1alpha1.StreamResponseDefinition response_definition = 1;
   */
  responseDefinition?: StreamResponseDefinition;

  constructor(data?: PartialMessage<ServerStreamRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ServerStreamRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_definition", kind: "message", T: StreamResponseDefinition },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamRequest {
    return new ServerStreamRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamRequest {
    return new ServerStreamRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamRequest {
    return new ServerStreamRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamRequest | PlainMessage<ServerStreamRequest> | undefined, b: ServerStreamRequest | PlainMessage<ServerStreamRequest> | undefined): boolean {
    return proto3.util.equals(ServerStreamRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ServerStreamResponse
 */
export class ServerStreamResponse extends Message<ServerStreamResponse> {
  /**
   * The conformance payload to respond with
   *
   * @generated from field: connectrpc.conformance.v1alpha1.ConformancePayload payload = 1;
   */
  payload?: ConformancePayload;

  constructor(data?: PartialMessage<ServerStreamResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ServerStreamResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payload", kind: "message", T: ConformancePayload },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamResponse {
    return new ServerStreamResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamResponse {
    return new ServerStreamResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamResponse {
    return new ServerStreamResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamResponse | PlainMessage<ServerStreamResponse> | undefined, b: ServerStreamResponse | PlainMessage<ServerStreamResponse> | undefined): boolean {
    return proto3.util.equals(ServerStreamResponse, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ClientStreamRequest
 */
export class ClientStreamRequest extends Message<ClientStreamRequest> {
  /**
   * Tells the server how to reply once all client messages are
   * complete. Required in the first message in the stream, but
   * should be ignored in subsequent messages.
   *
   * @generated from field: connectrpc.conformance.v1alpha1.UnaryResponseDefinition response_definition = 1;
   */
  responseDefinition?: UnaryResponseDefinition;

  /**
   * Additional data for subsequent messages in the stream.
   *
   * @generated from field: bytes request_data = 2;
   */
  requestData = new Uint8Array(0);

  constructor(data?: PartialMessage<ClientStreamRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ClientStreamRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_definition", kind: "message", T: UnaryResponseDefinition },
    { no: 2, name: "request_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamRequest {
    return new ClientStreamRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamRequest {
    return new ClientStreamRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamRequest {
    return new ClientStreamRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClientStreamRequest | PlainMessage<ClientStreamRequest> | undefined, b: ClientStreamRequest | PlainMessage<ClientStreamRequest> | undefined): boolean {
    return proto3.util.equals(ClientStreamRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ClientStreamResponse
 */
export class ClientStreamResponse extends Message<ClientStreamResponse> {
  /**
   * The conformance payload to respond with
   *
   * @generated from field: connectrpc.conformance.v1alpha1.ConformancePayload payload = 1;
   */
  payload?: ConformancePayload;

  constructor(data?: PartialMessage<ClientStreamResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ClientStreamResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payload", kind: "message", T: ConformancePayload },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamResponse {
    return new ClientStreamResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamResponse {
    return new ClientStreamResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamResponse {
    return new ClientStreamResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ClientStreamResponse | PlainMessage<ClientStreamResponse> | undefined, b: ClientStreamResponse | PlainMessage<ClientStreamResponse> | undefined): boolean {
    return proto3.util.equals(ClientStreamResponse, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.BidiStreamRequest
 */
export class BidiStreamRequest extends Message<BidiStreamRequest> {
  /**
   * Tells the server how to reply; required in the first message
   * in the stream. Should be ignored in subsequent messages.
   *
   * @generated from field: connectrpc.conformance.v1alpha1.StreamResponseDefinition response_definition = 1;
   */
  responseDefinition?: StreamResponseDefinition;

  /**
   * Tells the server whether it should wait for each request
   * before sending a response.
   * If true, it indicates the server should effectively interleave the
   * stream so messages are sent in request->response pairs.
   * If false, then the response stream will be sent once all request messages
   * are finished sending with the only delays between messages
   * being the optional fixed milliseconds defined in the response
   * definition.
   * This field is only relevant in the first message in the stream
   * and should be ignored in subsequent messages.
   *
   * @generated from field: bool full_duplex = 2;
   */
  fullDuplex = false;

  /**
   * Additional data for subsequent messages in the stream.
   *
   * @generated from field: bytes request_data = 3;
   */
  requestData = new Uint8Array(0);

  constructor(data?: PartialMessage<BidiStreamRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.BidiStreamRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_definition", kind: "message", T: StreamResponseDefinition },
    { no: 2, name: "full_duplex", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "request_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BidiStreamRequest {
    return new BidiStreamRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BidiStreamRequest {
    return new BidiStreamRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BidiStreamRequest {
    return new BidiStreamRequest().fromJsonString(jsonString, options);
  }

  static equals(a: BidiStreamRequest | PlainMessage<BidiStreamRequest> | undefined, b: BidiStreamRequest | PlainMessage<BidiStreamRequest> | undefined): boolean {
    return proto3.util.equals(BidiStreamRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.BidiStreamResponse
 */
export class BidiStreamResponse extends Message<BidiStreamResponse> {
  /**
   * The conformance payload to respond with
   *
   * @generated from field: connectrpc.conformance.v1alpha1.ConformancePayload payload = 1;
   */
  payload?: ConformancePayload;

  constructor(data?: PartialMessage<BidiStreamResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.BidiStreamResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payload", kind: "message", T: ConformancePayload },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BidiStreamResponse {
    return new BidiStreamResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BidiStreamResponse {
    return new BidiStreamResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BidiStreamResponse {
    return new BidiStreamResponse().fromJsonString(jsonString, options);
  }

  static equals(a: BidiStreamResponse | PlainMessage<BidiStreamResponse> | undefined, b: BidiStreamResponse | PlainMessage<BidiStreamResponse> | undefined): boolean {
    return proto3.util.equals(BidiStreamResponse, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.UnimplementedRequest
 */
export class UnimplementedRequest extends Message<UnimplementedRequest> {
  constructor(data?: PartialMessage<UnimplementedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.UnimplementedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnimplementedRequest {
    return new UnimplementedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnimplementedRequest {
    return new UnimplementedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnimplementedRequest {
    return new UnimplementedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnimplementedRequest | PlainMessage<UnimplementedRequest> | undefined, b: UnimplementedRequest | PlainMessage<UnimplementedRequest> | undefined): boolean {
    return proto3.util.equals(UnimplementedRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.UnimplementedResponse
 */
export class UnimplementedResponse extends Message<UnimplementedResponse> {
  constructor(data?: PartialMessage<UnimplementedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.UnimplementedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnimplementedResponse {
    return new UnimplementedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnimplementedResponse {
    return new UnimplementedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnimplementedResponse {
    return new UnimplementedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnimplementedResponse | PlainMessage<UnimplementedResponse> | undefined, b: UnimplementedResponse | PlainMessage<UnimplementedResponse> | undefined): boolean {
    return proto3.util.equals(UnimplementedResponse, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ConformancePayload
 */
export class ConformancePayload extends Message<ConformancePayload> {
  /**
   * @generated from field: bytes data = 1;
   */
  data = new Uint8Array(0);

  /**
   * Echoes back information about the request stream observed so far.
   *
   * @generated from field: connectrpc.conformance.v1alpha1.ConformancePayload.RequestInfo request_info = 2;
   */
  requestInfo?: ConformancePayload_RequestInfo;

  constructor(data?: PartialMessage<ConformancePayload>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ConformancePayload";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "request_info", kind: "message", T: ConformancePayload_RequestInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConformancePayload {
    return new ConformancePayload().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConformancePayload {
    return new ConformancePayload().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConformancePayload {
    return new ConformancePayload().fromJsonString(jsonString, options);
  }

  static equals(a: ConformancePayload | PlainMessage<ConformancePayload> | undefined, b: ConformancePayload | PlainMessage<ConformancePayload> | undefined): boolean {
    return proto3.util.equals(ConformancePayload, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ConformancePayload.RequestInfo
 */
export class ConformancePayload_RequestInfo extends Message<ConformancePayload_RequestInfo> {
  /**
   * The server echos back the request headers it observed here.
   *
   * @generated from field: repeated connectrpc.conformance.v1alpha1.Header request_headers = 1;
   */
  requestHeaders: Header[] = [];

  /**
   * The timeout observed that was included in the request. Other timeouts use a
   * type of uint32, but we want to be lenient here to allow whatever value the RPC
   * server observes, even if it's outside the range of uint32.
   *
   * @generated from field: optional int64 timeout_ms = 2;
   */
  timeoutMs?: bigint;

  /**
   * The server should echo back all requests received.
   * For unary and server-streaming requests, this should always contain a single request
   * For client-streaming and half-duplex bidi-streaming, this should contain
   * all client requests in the order received and be present in each response.
   * For full-duplex bidirectional-streaming, this should contain all requests in the order
   * they were received since the last sent response.
   *
   * @generated from field: repeated google.protobuf.Any requests = 3;
   */
  requests: Any[] = [];

  /**
   * If present, the request used the Connect protocol and a GET method. This
   * captures other relevant information about the request. If a server implementation
   * is unable to populate this (due to the server framework not exposing all of these
   * details to application code), it may be an empty message. This implies that the
   * server framework, at a minimum, at least expose to application code whether the
   * request used GET vs. POST.
   *
   * @generated from field: connectrpc.conformance.v1alpha1.ConformancePayload.ConnectGetInfo connect_get_info = 4;
   */
  connectGetInfo?: ConformancePayload_ConnectGetInfo;

  constructor(data?: PartialMessage<ConformancePayload_RequestInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ConformancePayload.RequestInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "request_headers", kind: "message", T: Header, repeated: true },
    { no: 2, name: "timeout_ms", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "requests", kind: "message", T: Any, repeated: true },
    { no: 4, name: "connect_get_info", kind: "message", T: ConformancePayload_ConnectGetInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConformancePayload_RequestInfo {
    return new ConformancePayload_RequestInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConformancePayload_RequestInfo {
    return new ConformancePayload_RequestInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConformancePayload_RequestInfo {
    return new ConformancePayload_RequestInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ConformancePayload_RequestInfo | PlainMessage<ConformancePayload_RequestInfo> | undefined, b: ConformancePayload_RequestInfo | PlainMessage<ConformancePayload_RequestInfo> | undefined): boolean {
    return proto3.util.equals(ConformancePayload_RequestInfo, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1alpha1.ConformancePayload.ConnectGetInfo
 */
export class ConformancePayload_ConnectGetInfo extends Message<ConformancePayload_ConnectGetInfo> {
  /**
   * @generated from field: repeated connectrpc.conformance.v1alpha1.Header query_params = 1;
   */
  queryParams: Header[] = [];

  constructor(data?: PartialMessage<ConformancePayload_ConnectGetInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.ConformancePayload.ConnectGetInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query_params", kind: "message", T: Header, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConformancePayload_ConnectGetInfo {
    return new ConformancePayload_ConnectGetInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConformancePayload_ConnectGetInfo {
    return new ConformancePayload_ConnectGetInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConformancePayload_ConnectGetInfo {
    return new ConformancePayload_ConnectGetInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ConformancePayload_ConnectGetInfo | PlainMessage<ConformancePayload_ConnectGetInfo> | undefined, b: ConformancePayload_ConnectGetInfo | PlainMessage<ConformancePayload_ConnectGetInfo> | undefined): boolean {
    return proto3.util.equals(ConformancePayload_ConnectGetInfo, a, b);
  }
}

/**
 * An error definition used for specifying a desired error response
 *
 * @generated from message connectrpc.conformance.v1alpha1.Error
 */
export class Error extends Message<Error> {
  /**
   * @generated from field: int32 code = 1;
   */
  code = 0;

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * @generated from field: repeated google.protobuf.Any details = 3;
   */
  details: Any[] = [];

  constructor(data?: PartialMessage<Error>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.Error";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "details", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Error {
    return new Error().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Error {
    return new Error().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Error {
    return new Error().fromJsonString(jsonString, options);
  }

  static equals(a: Error | PlainMessage<Error> | undefined, b: Error | PlainMessage<Error> | undefined): boolean {
    return proto3.util.equals(Error, a, b);
  }
}

/**
 * A tuple of name and values (ASCII) for a header or trailer entry.
 *
 * @generated from message connectrpc.conformance.v1alpha1.Header
 */
export class Header extends Message<Header> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: repeated string value = 2;
   */
  value: string[] = [];

  constructor(data?: PartialMessage<Header>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1alpha1.Header";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header {
    return new Header().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header {
    return new Header().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header {
    return new Header().fromJsonString(jsonString, options);
  }

  static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean {
    return proto3.util.equals(Header, a, b);
  }
}

