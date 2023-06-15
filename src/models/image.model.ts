import {Entity, model, property} from '@loopback/repository';

@model()
export class Image extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  originalFileName: string;

  @property({
    type: 'number',
    required: true,
  })
  contentLength: number;

  @property({
    type: 'string',
    required: true,
  })
  contentType: string;

  @property({
    type: 'number',
    required: true,
  })
  width: number;

  @property({
    type: 'number',
    required: true,
  })
  height: number;


  constructor(data?: Partial<Image>) {
    super(data);
  }
}

export interface ImageRelations {
  // describe navigational properties here
}

export type ImageWithRelations = Image & ImageRelations;
