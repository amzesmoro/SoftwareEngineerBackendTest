PGDMP                          y         	   credibook     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16467 	   credibook    DATABASE     {   CREATE DATABASE credibook WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE credibook;
                postgres    false            ?            1259    16470    roles    TABLE     v   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying,
    description character varying
);
    DROP TABLE public.roles;
       public         heap    postgres    false            ?            1259    16468    role_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    203            ?           0    0    role_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.role_id_seq OWNED BY public.roles.id;
          public          postgres    false    202                       2604    16473    roles id    DEFAULT     c   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            ?          0    16470    roles 
   TABLE DATA           6   COPY public.roles (id, name, description) FROM stdin;
    public          postgres    false    203   g
       ?           0    0    role_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.role_id_seq', 1, false);
          public          postgres    false    202                       2606    16478    roles role_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.roles DROP CONSTRAINT role_pkey;
       public            postgres    false    203            ?   )   x?3?LL??̃?
i?E
%??%\F??ũE`!???? ?Fb     