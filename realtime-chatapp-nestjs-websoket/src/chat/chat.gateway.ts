import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('new client connected ', client.id);
    this.server.emit('user-joined', {
      message: 'user ' + client.id + ' join the chat',
    });
  }

  handleDisconnect(client: Socket) {
    console.log('client disconnected', client.id);
    this.server.emit('user-leaf', {
      message: 'user' + client.id + 'join the chat',
    });
  }

  @SubscribeMessage('newMessage')
  handleNewMessage(
    @MessageBody() message: any,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(message);
    // reply ke 1 user yang mengirim pesan baru
    client.emit('reply', 'This is the reply');
    //user server to broadcasting to many user
    this.server.emit('reply', message);
  }
}
