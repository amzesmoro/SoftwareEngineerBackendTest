PGDMP                          y         	   credibook     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16467 	   credibook    DATABASE     {   CREATE DATABASE credibook WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE credibook;
                postgres    false            �            1259    16492    token    TABLE     �   CREATE TABLE public.token (
    id integer NOT NULL,
    id_user integer,
    token character varying,
    status_is_valid boolean,
    created_at timestamp with time zone
);
    DROP TABLE public.token;
       public         heap    postgres    false            �            1259    16490    token_id_seq    SEQUENCE     �   CREATE SEQUENCE public.token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.token_id_seq;
       public          postgres    false    207            �           0    0    token_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.token_id_seq OWNED BY public.token.id;
          public          postgres    false    206                       2604    16495    token id    DEFAULT     d   ALTER TABLE ONLY public.token ALTER COLUMN id SET DEFAULT nextval('public.token_id_seq'::regclass);
 7   ALTER TABLE public.token ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            �          0    16492    token 
   TABLE DATA           P   COPY public.token (id, id_user, token, status_is_valid, created_at) FROM stdin;
    public          postgres    false    207   �
       �           0    0    token_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.token_id_seq', 13, true);
          public          postgres    false    206                       2606    16497    token token_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.token
    ADD CONSTRAINT token_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.token DROP CONSTRAINT token_pkey;
       public            postgres    false    207            �   �  x��Y��J���_1�7v�@@|SA-�*�}�ML.l.-���0����L'=����^j�T}�;R��,keL�X�d5��V��1�Q�w��">�A{�6`��}n������p$�
[�m�L���K��CƮ�|R�](������4<����gu��'ρJv���ų�k�=���ڵPK/ώ�-�"ƾ���Q��&c���&�N@��X��u�Xt�}g|G_y��Ω���ss��M�45A��hռ}�d׮������v�2
��=}��H��9�x�ʳ��}�m��:>��iV�{ES���������@[@��6Q{��W�&�T)dL���T����Mr���J{��l��");n�]V�������G{}a�����J�Ϊ� v߅�� ��?@x`;�'��o��>X�y���d�3���ǈE���%Y�s���~2�*v[X?���� ��m�L���	P�4�vCc[��X�����֮�#�/�+"m�_�Id'�G�`p�i�v/���36����/���R��ҩ����pj�/e9���8̎������-}��-)��F�F5�+/S꘣�7�&��V���%a1����ajVM��k��o��K�_Cg��k����ߪ�P�����D�:�����$���2��a^�@��.��)S�٭}�)���=a�^����ߔ�6��b��Cڇ�|0��sv���ʙ,�\�dqT,��ЃRR�(�^D��:�k�;`�+�й��<Id�|�^y'Ty<������a�W�xseP���.�W����`i��N��ʿ���p��O���O�ǿG��c�[�5�����K_�4��O�`Z��s��r��e����RU�&����n8R	�_�/v�Oҏ?�����[�����g������A����� ���A�
1+ȋ��	��`�|Z8|/J�dm�%0��D�5}�^�o��k����Q�=�����z�����NV�vɋMh�U}(�U�Λ0�Yq�����;��į�a�^���"ͺז~2���1Lǅ������ �`�'i!f�k�>Z�e������7��~x���9,�kU���?ӽ���S��M�������*���O�&��Sә��)������;���X�u�Oi�i�Gb���J�J�4��e�,�	��}�g��-�Q�g��z����~Ӈ��vo?�<z��㇤�B�yd�-���h�Z�|�}=�|t�jiHUW�&���/����}|xx��N�!     