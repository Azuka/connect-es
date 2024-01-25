/**
 * @fileoverview gRPC-Web generated client stub for connectrpc.eliza.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: connectrpc/eliza/v1/eliza.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.connectrpc = {};
proto.connectrpc.eliza = {};
proto.connectrpc.eliza.v1 = require('./eliza_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.connectrpc.eliza.v1.ElizaServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.connectrpc.eliza.v1.ElizaServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.connectrpc.eliza.v1.SayRequest,
 *   !proto.connectrpc.eliza.v1.SayResponse>}
 */
const methodDescriptor_ElizaService_Say = new grpc.web.MethodDescriptor(
  '/connectrpc.eliza.v1.ElizaService/Say',
  grpc.web.MethodType.UNARY,
  proto.connectrpc.eliza.v1.SayRequest,
  proto.connectrpc.eliza.v1.SayResponse,
  /**
   * @param {!proto.connectrpc.eliza.v1.SayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.connectrpc.eliza.v1.SayResponse.deserializeBinary
);


/**
 * @param {!proto.connectrpc.eliza.v1.SayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.connectrpc.eliza.v1.SayResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.connectrpc.eliza.v1.SayResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.connectrpc.eliza.v1.ElizaServiceClient.prototype.say =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/connectrpc.eliza.v1.ElizaService/Say',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Say,
      callback);
};


/**
 * @param {!proto.connectrpc.eliza.v1.SayRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.connectrpc.eliza.v1.SayResponse>}
 *     Promise that resolves to the response
 */
proto.connectrpc.eliza.v1.ElizaServicePromiseClient.prototype.say =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/connectrpc.eliza.v1.ElizaService/Say',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Say);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.connectrpc.eliza.v1.IntroduceRequest,
 *   !proto.connectrpc.eliza.v1.IntroduceResponse>}
 */
const methodDescriptor_ElizaService_Introduce = new grpc.web.MethodDescriptor(
  '/connectrpc.eliza.v1.ElizaService/Introduce',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.connectrpc.eliza.v1.IntroduceRequest,
  proto.connectrpc.eliza.v1.IntroduceResponse,
  /**
   * @param {!proto.connectrpc.eliza.v1.IntroduceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.connectrpc.eliza.v1.IntroduceResponse.deserializeBinary
);


/**
 * @param {!proto.connectrpc.eliza.v1.IntroduceRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.connectrpc.eliza.v1.IntroduceResponse>}
 *     The XHR Node Readable Stream
 */
proto.connectrpc.eliza.v1.ElizaServiceClient.prototype.introduce =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/connectrpc.eliza.v1.ElizaService/Introduce',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Introduce);
};


/**
 * @param {!proto.connectrpc.eliza.v1.IntroduceRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.connectrpc.eliza.v1.IntroduceResponse>}
 *     The XHR Node Readable Stream
 */
proto.connectrpc.eliza.v1.ElizaServicePromiseClient.prototype.introduce =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/connectrpc.eliza.v1.ElizaService/Introduce',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Introduce);
};


module.exports = proto.connectrpc.eliza.v1;

